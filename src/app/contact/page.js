import ContactMain from "@/components/layout/main/ContactMain";
// import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Contact ",
  description: "Contact",
};
export default function Contact() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      {/* <ThemeController /> */}
      <ContactMain />
    </PageWrapper>
  );
}
