import Card from "@/components/Card";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";

export default function RootPage() {
  return (
    <div className="flex flex-col mx-auto w-full">
      <section className="flex items-center w-full">
        <CustomInput className="flex-grow mr-2" />
        <CustomButton label="입력" className="flex-shrink-0" />
      </section>
      {/* 카드가 들어갈 위치. 회사이미지, 제목, 직무카테고리 */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 mb-4">
        <Card imageUrl="" title="SK" category="Software Engineer" />
        <Card imageUrl="" title="SK" category="Software Engineer" />
        <Card imageUrl="" title="SK" category="Software Engineer" />
        <Card imageUrl="" title="SK" category="Software Engineer" />
        <Card imageUrl="" title="SK" category="Software Engineer" />
        <Card imageUrl="" title="SK" category="Software Engineer" />
        <Card imageUrl="" title="SK" category="Software Engineer" />
      </section>
    </div>
  );
}
