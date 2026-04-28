import { AuthGuard } from "@/components/admin/auth-guard";
import { AdminDashboard } from "@/components/admin/dashboard";

export const metadata = {
  title: "Admin | Azad Portfolio",
  description: "Manage projects, articles, reviews, and travel posts.",
};

export default function AdminPage() {
  return (
    <AuthGuard>
      <AdminDashboard />
    </AuthGuard>
  );
}
