export default function Footer() {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4 border-t w-full text-gray-400">
      <p>
        &copy;{" "}
        {startYear === currentYear ? startYear : `${startYear}-${currentYear}`}{" "}
        munyeol-Yoon. All rights reserved.
      </p>
    </footer>
  );
}
