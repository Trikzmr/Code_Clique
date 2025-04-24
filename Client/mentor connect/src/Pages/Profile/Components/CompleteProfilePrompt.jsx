import { CircleAlert, ArrowRight } from "lucide-react";

const CompleteProfilePrompt = () => {
  return (
    <div className="w-full max-w-full min-h-36 mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-blue-100 text-green-400 rounded-full">
          <CircleAlert className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm text-gray-800 font-medium">Complete your profile</p>
          <p className="text-sm text-gray-500">
            You’re almost there. Completing your profile helps others understand your expertise.
          </p>
        </div>
      </div>
      <a href="/completeprofile">
      <button className="flex items-center gap-2 bg-green-400 hover:bg-green-300 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
        Complete Now
        <ArrowRight className="w-4 h-4" />
      </button>
      </a>
    </div>
  );
};

export default CompleteProfilePrompt;
