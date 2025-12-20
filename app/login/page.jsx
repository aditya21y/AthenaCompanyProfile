import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginPage from "@/components/Login";

export default async function Login() {
    // ✅ WAJIB pakai await — Next.js 13–15 mensyaratkan ini
    const cookieStore = await cookies();
    const sid = cookieStore.get("sid");

    // ✅ Tidak ada SID → tampilkan page login
    if (!sid?.value) {
        return <LoginPage />;
    }

    // ✅ Cek apakah SID masih valid di ERPNext
    const res = await fetch(
        "http://202.10.48.104/api/method/frappe.auth.get_logged_user",
        {
            method: "GET",
            headers: {
                Cookie: `sid=${sid.value}`,
            },
            // 🔥 Penting: biarkan fetch di server, tidak perlu credentials
        }
    );

    // ✅ Jika SID valid → redirect ke ERPNext
    if (res.ok) {
        redirect("http://202.10.48.104/app/home");
    }

    // ❌ Jika SID expired → tampilkan login page lagi
    return <LoginPage />;
}
