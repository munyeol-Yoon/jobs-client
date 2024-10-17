import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";

export default function RootPage() {
  return (
    <div className="flex flex-col mx-auto w-full">
      <section>
        <CustomInput />
        <CustomButton label="입력" />
      </section>
      page
    </div>
  );
}
