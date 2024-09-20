import { getCurrentUser } from "@/app/actions/getCurrentUser";
import CreateForm from "@/app/components/admin/CreateForm";
import AuthContainer from "@/app/components/containers/AuthContainer";
import WarningText from "@/app/components/WarningText";

const createProduct = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="SADECE ADMİN GİRİŞİ!!!" />;
  }

  return (
    <AuthContainer>
      <CreateForm />
    </AuthContainer>
  );
};

export default createProduct;
