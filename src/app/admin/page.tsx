"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie, deleteCookie } from "cookies-next";
import BlogComponent from "./components/BlogComponent";
import FAQComponent from "./components/FAQComponent";
import PortfolioComponent from "./components/PortfolioComponent";

interface Blog {
  _id: string;
  category: string;
  title: string;
  headPhotoLink: string;
  paragraphs: string[];
  subPhotos: string[];
}

const AdminPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("blog");
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const isLoggedIn = getCookie("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin/login");
    } else {
      fetchBlogs();
    }
  }, [router]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data: Blog[] = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleLogout = () => {
    deleteCookie("isLoggedIn");
    router.push("/admin/login");
  };

  const handleEditBlog = async (id: string) => {
    // Implement edit blog functionality
  };

  const handleDeleteBlog = async (id: string) => {
    const res = await fetch("/api/blogs/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      fetchBlogs();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
        <div className="flex gap-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded ${activeTab === "blog" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setActiveTab("blog")}
          >
            Blog
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === "faq" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setActiveTab("faq")}
          >
            FAQ
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === "portfolio" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio
          </button>
        </div>
        {activeTab === "blog" && (
          <BlogComponent
            blogs={blogs}
            fetchBlogs={fetchBlogs}
            handleEditBlog={handleEditBlog}
            handleDeleteBlog={handleDeleteBlog}
          />
        )}
        {activeTab === "faq" && <FAQComponent />}
        {activeTab === "portfolio" && <PortfolioComponent />}
      </div>
    </div>
  );
};

export default AdminPage;