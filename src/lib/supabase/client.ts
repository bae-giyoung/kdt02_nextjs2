import { createClient } from '@supabase/supabase-js'
// .env.local 파일의 환경 변수를 사용하여 Supabase 클라이언트를 생성합니다.
export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)