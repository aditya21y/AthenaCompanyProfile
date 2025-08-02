import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginPage from "@/components/Login";

export default async function Login() {
    const cookieStore = cookies();
    const sid = cookieStore.get("sid");

    // ✅ Kalau ga ada SID sama sekali → tampilkan login page
    if (!sid?.value) {
        return <LoginPage />;
    }

    // ✅ Cek apakah SID valid ke server ERP
    const res = await fetch("http://localhost:8000/api/method/frappe.auth.get_logged_user", {
        method: "GET",
        headers: {
            Cookie: `sid=${sid.value}`,
        },
    });

    if (res.ok) {
        // ✅ SID valid, user masih login → redirect ke home ERP
        redirect("http://localhost:8000/app/home");
    }

    // ❌ SID invalid / expired → lanjut ke login page
    return <LoginPage />;
}

