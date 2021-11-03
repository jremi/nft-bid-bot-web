const { createClient } = require('@supabase/supabase-js')

module.exports = createClient(
  process.env.SUPABASE_API_URL,
  process.env.SUPABASE_API_KEY_SECRET
)
