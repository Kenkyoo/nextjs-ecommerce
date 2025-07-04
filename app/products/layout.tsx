import Navbar from "@/app/ui/dashboard/header/navbar";
import Container from "../ui/container";
import Footer from "@/components/footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import Banner from "@/components/banner";
import { CustomTrigger } from "@/components/customTrigger";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <Banner />
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <Container>
          <Navbar>
            <CustomTrigger />
          </Navbar>
          {children}
          <Footer />
        </Container>
      </SidebarProvider>
    </div>
  );
}
