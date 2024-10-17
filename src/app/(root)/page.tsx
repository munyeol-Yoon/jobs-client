import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";

export default function RootPage() {
  return (
    <div className="flex flex-col mx-auto w-full">
      <section className="flex items-center w-full">
        <CustomInput className="flex-grow mr-2" />
        <CustomButton label="입력" className="flex-shrink-0" />
      </section>
      page
    </div>
  );
}
