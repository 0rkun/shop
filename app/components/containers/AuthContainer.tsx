const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-fit full mt-20 w-full flex  justify-center">
      {children}
    </div>
  );
};

export default AuthContainer;
