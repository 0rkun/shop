import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getProducts from "@/app/actions/getProducts";
import ManageClient from "@/app/components/admin/ManageClient";
import AuthContainer from "@/app/components/containers/AuthContainer";
import WarningText from "@/app/components/WarningText";

const Manage = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="SADECE ADMİN GİRİŞİ!!!" />;
  }
  return (
    <AuthContainer>
      <ManageClient products={products} />
    </AuthContainer>
  );
};

export default Manage;
