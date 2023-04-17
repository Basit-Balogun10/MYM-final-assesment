import React from 'react'
import Activity, {activityType} from '../components/Activity';
import PieChartMetric from '../components/PieChartMetric';
import ArrowSquareDown from '../components/svg/ArrowSquareDown';
import Calculator from '../components/svg/Calculator';
import NotificationBell from '../components/svg/NotificationBell';
import PieChart from '../components/svg/PieChart';
import Search from '../components/svg/Search';
import ThreeSquares from '../components/svg/ThreeSquares';
import WebChart from '../components/svg/WebChart';

type pieChartMetric = {
    count: number;
    title: string;
};

const pieChartMetrics: pieChartMetric[] = [
    {
        count: 286,
        title: "Invitations sent",
    },
    {
        count: 12,
        title: "Pending Invitations",
    },
    {
        count: 2891,
        title: "Profile views",
    },
];

const activities: activityType[] = [
  {
    imageUrl: "/assets/images/alex-morgan.png",
    icon: null,
    isUserActivity: true,
    user: "Alex Morgan",
    message: "Sent you a message"
  },
  {
    imageUrl: "/assets/images/mujo-prosper.png",
    icon: null,
    isUserActivity: true,
    user: "Mujo Prosper",
    message: "Sent you a connection request"
  },
  {
    imageUrl: "",
    icon: <ThreeSquares />,
    isUserActivity: false,
    title: "Upcoming Task",
    message: "Create a campaign for designers due on 02/04/2023"
  },
  {
    imageUrl: "",
    icon: <ThreeSquares />,
    isUserActivity: false,
    title: "Upcoming Task",
    message: "Create a campaign for designers due on 02/04/2023"
  },
]

const MainSection = () => {
  return (
      <section className="relative flex-auto py-6 pl-8 pr-12 bg-white">
          {/* USER PROFILE */}
          <div className="absolute right-12 flex items-center space-x-4">
              <div className="bg-grayBg p-[0.4rem] rounded-full cursor-pointer">
                  <NotificationBell />
              </div>
              <div className="flex items-center space-x-2">
                  <img
                      className="w-8 h-8 rounded-full cursor-pointer"
                      src="/assets/images/jacob-frost.png"
                      alt="Jacob Frost's profile pic"
                  />
                  <p className="text-sm">Jacob Frost</p>
                  <div className="cursor-pointer">
                      <ArrowSquareDown />
                  </div>
              </div>
          </div>
          {/* SEARCH BAR */}
          <div className="relative w-[40%] pt-3 mb-12">
              <input
                  className="w-full px-6 py-[0.4rem] bg-grayBg text-grayText text-xs rounded-md"
                  placeholder="Search"
              />
              <div className="absolute top-[45%] right-3 cursor-pointer">
                  <Search />
              </div>
          </div>
          {/* ANALYTICS */}
          {/* ANALYTICS HEADER */}
          <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Campaign Analytics</h3>
              <div className="px-2 py-1 flex items-center space-x-2 bg-grayBg text-xs rounded-md">
                  <Calculator color="#000000" size="16" />
                  <p>Mar 10 - Apr 10</p>
                  <ArrowSquareDown />
              </div>
          </div>
          {/* PIE CHART METRICS */}
          <div className="mb-12 flex items-center space-x-10">
              {pieChartMetrics.map((metric, index) => (
                  <PieChartMetric count={metric.count} title={metric.title} />
              ))}
          </div>
          {/* CHARTS */}
          <div className="mb-12 flex items-center justify-between">
              <PieChart />
              <WebChart />
          </div>
          {/* RECENT ACTIVITY */}
          <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <div className="px-2 py-1 flex items-center space-x-2 bg-grayBg text-xs rounded-md">
                  <p>Last 24h</p>
                  <ArrowSquareDown />
              </div>
          </div>
          {/* ACTIVITIES */}
          <div className="activities h-32 overflow-y-scroll">
          {activities.map((activity, index) => (
              <Activity key={index} activity={activity}>{activity.icon}</Activity>
          ))}
          </div>
      </section>
  );
}

export default MainSection