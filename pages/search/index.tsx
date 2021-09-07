// import Navbar from "@/components/compose/Header";
import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

const SearchPage = () => {
  return (
    <MainLayout>
      <main className="flex">
        <section>
          <p className="text-xs">300+ Stays for 5 number of guests</p>

          <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays on Mars</h1>

          <div className="hidden lg:inline-flex">
            <p className="px-4 py-2 transition duration-100 ease-out transform border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100">
              Cancellation Flexibility
            </p>

            <p>Cancellation Flexibility</p>

            <p>Cancellation Flexibility</p>

            <p>Cancellation Flexibility</p>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default SearchPage;
