import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon, MoreVertical } from 'lucide-react';
import { FaUser, FaTag, FaLaptopCode } from 'react-icons/fa';

const MyComponentNew = (props) => {
  const {
    data: { Title, username, Description, Keyskills, _id, Category, createdAt },
    color = {} // fallback in case color is undefined
  } = props;

  const navigate = useNavigate();
  const createdDate = new Date(createdAt).toLocaleDateString();

    const [taskList, setTaskList] = useState([]);
    const [CompletedTask, setCompletedTask] =useState([]);
    const [rate, setRate] = useState(0);
    let projectid = props.id;
      
    const getTaskList = async() => {
        const container = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ ProjectId: _id }),
        }
        try {
            const res = await fetch('https://code-clique-9qgm.vercel.app/api/FindTaskByProjectId', container);
            const data = await res.json();
            setCompletedTask(data.filter((task) => task.Status === "Completed"));
            setTaskList(data);
        } catch (error) {
            console.log(error);
        }
    }
      
    const onload = () => {
        getTaskList();
    }
  
    useEffect(() => {
      if (taskList.length > 0) {
          setRate(Math.round((CompletedTask.length / taskList.length) * 100));
      }
  }, [taskList, CompletedTask]);
    useEffect(onload, []);
  

  // Set default colors if not provided
  const bgColor = color.bgcolor || '#FEF3C7'; // fallback: Tailwind's yellow-100
  const progressColor = color.prgclr || '#F59E0B'; // fallback: Tailwind's yellow-500

  const gotodetails = () => {
    navigate(`/project/${_id}`);
  };

  return (
    <div
      onClick={gotodetails}
      className="p-4 rounded-xl shadow-md cursor-pointer w-[90%] mx-auto"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-between items-center text-sm mb-2">
        <div className="flex items-center gap-1 text-gray-700">
          <CalendarIcon className="w-4 h-4" />
          {createdDate}
        </div>
        <MoreVertical className="w-4 h-4 text-gray-500" />
      </div>

      <h2 className="text-lg font-semibold text-gray-800">{Title}</h2>
      <div className="flex items-center text-sm text-gray-500 mb-1">
        <FaUser className="mr-2 text-gray-600" />
        <span className="font-semibold">@{username}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-1">
        <FaTag className="mr-2 text-gray-600" />
        <p>{Category}</p>
      </div>
      <div className="flex-grow mb-4">
        <p className="text-sm text-gray-700 line-clamp-3 mb-4 h-12">{Description}</p>
      </div>

      {Keyskills?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {Keyskills.slice(0, Keyskills.length > 4 ? 3 : 4).map((skill, index) => (
            <span
              key={index}
              className="flex items-center text-xs text-black bg-gray-100 border border-gray-300 px-4 py-1 rounded-full hover:bg-gray-200 transition duration-200"
            >
              <FaLaptopCode className="mr-1 text-gray-600" />
              {skill}
            </span>
          ))}

          {Keyskills.length > 4 && (
            <span className="flex items-center text-xs text-black bg-gray-100 border border-gray-300 px-4 py-1 rounded-full hover:bg-gray-200 transition duration-200">
              +{Keyskills.length - 3}
            </span>
          )}
        </div>
      )}

      <div className="flex items-center gap-2 mt-2">
        <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#d1d5db' }}>
          <div className="h-full" style={{ width: `${rate}%`, backgroundColor: progressColor }}></div>
        </div>
        <span className="text-xs text-gray-700">{rate}%</span>
      </div>
    </div>
  );
};

export default MyComponentNew;
