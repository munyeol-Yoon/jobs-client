import { TJob } from "@/\btypes/job.type";
import api from "@/api/api";
import Card from "@/components/Card";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";

export default async function RootPage() {
  let jobs: TJob[] = [];

  try {
    jobs = await api.job.getAllJob();
  } catch (err) {
    console.error(err);
  }

  return (
    <div className="flex flex-col mx-auto w-full">
      <section className="flex items-center w-full">
        <CustomInput className="flex-grow mr-2" />
        <CustomButton label="입력" className="flex-shrink-0" />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 mb-4">
        {jobs.map((job) => (
          <Card
            key={job.id}
            imageUrl="/company_image/sk_image.png"
            title={job.title}
            category={job.category}
            link={job.link}
          />
        ))}
      </section>
    </div>
  );
}
