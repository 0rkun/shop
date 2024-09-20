const WarningText = ({ text }: { text: string }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center text-slate-600 text-2xl">
      {text}
    </div>
  );
};

export default WarningText;
