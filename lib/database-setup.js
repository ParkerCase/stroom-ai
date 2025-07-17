// Database setup script for Supabase
// Run this in Supabase SQL editor to create the necessary tables

export const databaseSchema = `
-- Enable Row Level Security
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create referral_accounts table
CREATE TABLE IF NOT EXISTS referral_accounts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  company TEXT,
  phone TEXT,
  referral_code TEXT UNIQUE NOT NULL,
  commission_rate DECIMAL(5,4) DEFAULT 0.10,
  tier TEXT DEFAULT 'bronze',
  total_earnings DECIMAL(10,2) DEFAULT 0,
  pending_commissions DECIMAL(10,2) DEFAULT 0,
  paid_commissions DECIMAL(10,2) DEFAULT 0,
  referral_count INTEGER DEFAULT 0,
  conversion_rate DECIMAL(5,2) DEFAULT 0,
  status TEXT DEFAULT 'active',
  payment_info JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create referral_clicks table
CREATE TABLE IF NOT EXISTS referral_clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  referral_code TEXT NOT NULL,
  ip_address INET,
  user_agent TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  converted BOOLEAN DEFAULT FALSE,
  conversion_value DECIMAL(10,2) DEFAULT 0
);

-- Create referral_conversions table
CREATE TABLE IF NOT EXISTS referral_conversions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  referral_code TEXT NOT NULL,
  customer_email TEXT,
  customer_company TEXT,
  sale_amount DECIMAL(10,2) NOT NULL,
  commission_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  conversion_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  payment_date TIMESTAMP WITH TIME ZONE,
  notes TEXT
);

-- Create referral_payments table
CREATE TABLE IF NOT EXISTS referral_payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  payment_method TEXT,
  payment_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending',
  transaction_id TEXT,
  notes TEXT
);

-- Create referral_activities table
CREATE TABLE IF NOT EXISTS referral_activities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  referral_code TEXT NOT NULL,
  activity_type TEXT NOT NULL,
  platform TEXT,
  metadata JSONB,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_referral_accounts_user_id ON referral_accounts(user_id);
CREATE INDEX IF NOT EXISTS idx_referral_accounts_referral_code ON referral_accounts(referral_code);
CREATE INDEX IF NOT EXISTS idx_referral_clicks_referral_code ON referral_clicks(referral_code);
CREATE INDEX IF NOT EXISTS idx_referral_conversions_referral_code ON referral_conversions(referral_code);
CREATE INDEX IF NOT EXISTS idx_referral_payments_user_id ON referral_payments(user_id);
CREATE INDEX IF NOT EXISTS idx_referral_activities_referral_code ON referral_activities(referral_code);

-- Enable Row Level Security on all tables
ALTER TABLE referral_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_conversions ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_activities ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for referral_accounts
CREATE POLICY "Users can view their own referral account" ON referral_accounts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own referral account" ON referral_accounts
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own referral account" ON referral_accounts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for referral_clicks (read-only for users)
CREATE POLICY "Users can view clicks for their referral code" ON referral_clicks
  FOR SELECT USING (
    referral_code IN (
      SELECT referral_code FROM referral_accounts WHERE user_id = auth.uid()
    )
  );

-- Create RLS policies for referral_conversions
CREATE POLICY "Users can view conversions for their referral code" ON referral_conversions
  FOR SELECT USING (
    referral_code IN (
      SELECT referral_code FROM referral_accounts WHERE user_id = auth.uid()
    )
  );

-- Create RLS policies for referral_payments
CREATE POLICY "Users can view their own payments" ON referral_payments
  FOR SELECT USING (auth.uid() = user_id);

-- Create RLS policies for referral_activities
CREATE POLICY "Users can view activities for their referral code" ON referral_activities
  FOR SELECT USING (
    referral_code IN (
      SELECT referral_code FROM referral_accounts WHERE user_id = auth.uid()
    )
  );

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_referral_accounts_updated_at 
  BEFORE UPDATE ON referral_accounts 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create function to calculate conversion rate
CREATE OR REPLACE FUNCTION calculate_conversion_rate()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE referral_accounts 
  SET conversion_rate = (
    CASE 
      WHEN referral_count > 0 THEN 
        (SELECT COUNT(*)::DECIMAL / referral_count * 100 
         FROM referral_conversions 
         WHERE referral_code = NEW.referral_code AND status = 'paid')
      ELSE 0 
    END
  )
  WHERE referral_code = NEW.referral_code;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for conversion rate calculation
CREATE TRIGGER update_conversion_rate
  AFTER INSERT OR UPDATE ON referral_conversions
  FOR EACH ROW EXECUTE FUNCTION calculate_conversion_rate();
`;

// Function to run the schema setup
export const setupDatabase = async (supabase) => {
  try {
    // Split the schema into individual statements
    const statements = databaseSchema
      .split(";")
      .map((stmt) => stmt.trim())
      .filter((stmt) => stmt.length > 0);

    for (const statement of statements) {
      if (statement.trim()) {
        const { error } = await supabase.rpc("exec_sql", { sql: statement });
        if (error) {
          console.error("Error executing statement:", error);
        }
      }
    }

    console.log("Database setup completed successfully");
  } catch (error) {
    console.error("Error setting up database:", error);
  }
};
