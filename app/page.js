import {
  Folder,
  FileText,
  Search,
  GitBranch,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f8fa]">

      {/* TOP NAVBAR */}
      <div className="border-b bg-white px-6 py-4 flex items-center gap-8 text-gray-700 font-semibold">
        <p className="text-black cursor-pointer">Code</p>
        <p className="cursor-pointer">Issues</p>
        <p className="cursor-pointer">Pull requests</p>
        <p className="cursor-pointer">Actions</p>
        <p className="cursor-pointer">Projects</p>
        <p className="cursor-pointer">Security</p>
        <p className="cursor-pointer">Insights</p>
      </div>

      {/* MAIN */}
      <div className="flex">

        {/* SIDEBAR */}
        <div className="w-[300px] min-h-screen border-r bg-white">

          {/* FILES HEADER */}
          <div className="p-4 border-b">
            <h1 className="text-2xl font-bold">Files</h1>
          </div>

          {/* BRANCH */}
          <div className="p-4">
            <button className="w-full border rounded-md px-4 py-2 flex items-center gap-2 hover:bg-gray-100">
              <GitBranch size={16} />
              main
            </button>
          </div>

          {/* SEARCH */}
          <div className="px-4">
            <div className="border rounded-md flex items-center px-3 py-2">
              <Search size={18} className="text-gray-500" />

              <input
                type="text"
                placeholder="Go to file"
                className="ml-2 outline-none w-full bg-transparent"
              />
            </div>
          </div>

          {/* FILE LIST */}
          <div className="mt-4">

            <div className="flex items-center gap-3 px-4 py-3 bg-gray-100">
              <Folder size={20} className="text-blue-500" />
              <p className="font-medium">app</p>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
              <FileText size={18} />
              <p>globals.css</p>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
              <FileText size={18} />
              <p>layout.js</p>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
              <FileText size={18} />
              <p>page.js</p>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
              <FileText size={18} />
              <p>package.json</p>
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 p-6">

          {/* PATH */}
          <div className="flex items-center gap-2 text-3xl font-semibold">
            <p className="text-blue-600">portfolio</p>
            <span>/</span>
            <p>app</p>
            <span>/</span>
          </div>

          {/* COMMIT BOX */}
          <div className="bg-white border rounded-lg p-4 mt-6 flex items-center gap-3">

            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <p className="font-semibold">
                lintangntyas
                <span className="text-gray-500 font-normal ml-2">
                  Update page.js
                </span>
              </p>
            </div>
          </div>

          {/* FILE TABLE */}
          <div className="bg-white border rounded-lg mt-6 overflow-hidden">

            {/* TABLE HEADER */}
            <div className="grid grid-cols-2 bg-gray-50 px-6 py-4 border-b font-semibold">
              <p>Name</p>
              <p>Last commit message</p>
            </div>

            {/* ROW */}
            <div className="grid grid-cols-2 px-6 py-4 border-b hover:bg-gray-50">

              <div className="flex items-center gap-3">
                <Folder className="text-blue-500" />
                <p>..</p>
              </div>

              <p></p>
            </div>

            {/* ROW */}
            <div className="grid grid-cols-2 px-6 py-4 border-b hover:bg-gray-50">

              <div className="flex items-center gap-3">
                <FileText />
                <p>globals.css</p>
              </div>

              <p className="text-gray-600">
                Update globals.css
              </p>
            </div>

            {/* ROW */}
            <div className="grid grid-cols-2 px-6 py-4 border-b hover:bg-gray-50">

              <div className="flex items-center gap-3">
                <FileText />
                <p>layout.js</p>
              </div>

              <p className="text-gray-600">
                Update layout.js
              </p>
            </div>

            {/* ROW */}
            <div className="grid grid-cols-2 px-6 py-4 hover:bg-gray-50">

              <div className="flex items-center gap-3">
                <FileText />
                <p>page.js</p>
              </div>

              <p className="text-gray-600">
                Update page.js
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
