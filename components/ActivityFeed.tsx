import { Card, CardBody, Typography, Avatar } from "./MTailwind";

const customers = [
  {
    name: "Tania Andrew",
    email: "tania@gmail.com",
    price: 400,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
  },
  {
    name: "John Micheal",
    email: "john@gmail.com",
    price: 420,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
  },
  {
    name: "Alexa Liras",
    email: "alexa@gmail.com",
    price: 340,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
  },
];

export const ActivityFeed = () => {
  return (
    <Card className="w-full border-2 pt-0 mt-0">
      <CardBody>
        <div className="mb-2 items-center ">
          <Typography
            variant="h5"
            color="black"
            className="text-[16px] font-[500] "
          >
            Activity Feed
          </Typography>
        </div>
        <div className="border-b-2 border-gray-200"></div>
        <div className="divide-y divide-gray-400">
          <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
            <div className="flex items-start gap-x-3">
              <Avatar
                size="sm"
                src={
                  "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg"
                }
                alt={"image"}
              />
              <div>
                <Typography
                  color="blue-gray"
                  variant="h6"
                  className="text-[14px]"
                >
                  Kushantha Charuka
                  <span className="text-[14px] font-[500]"> created </span>
                  <span className=" font-[600] text-[#6e6868]">
                    {" "}
                    Contract #00124 need John Beige’s signature
                  </span>
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="text-[12px] font-[400]"
                >
                  Sep 16, 2022 at 11:30 AM
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
            <div className="flex items-start gap-x-3">
              <Avatar
                size="sm"
                src={
                  "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                }
                alt={"image"}
              />
              <div>
                <Typography
                  color="blue-gray"
                  variant="h6"
                  className="text-[14px]"
                >
                  <span className="text-[14px] font-[500]"> Lorem ipsum </span>{" "}
                  dolor sit amet,
                  <span className="text-[14px] font-[500]">
                    {" "}
                    consectetur adipiscing elit.{" "}
                  </span>{" "}
                  Maecenas
                  <span className="text-[14px] font-[500]">
                    {" "}
                    pretium neque{" "}
                  </span>{" "}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="text-[12px] font-[400]"
                >
                  Sep 16, 2022 at 11:45 AM
                </Typography>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
            <div className="flex items-start gap-x-3">
              <Avatar
                size="sm"
                src={
                  "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                }
                alt={"image"}
              />
              <div>
                <Typography
                  color="blue-gray"
                  variant="h6"
                  className="text-[14px]"
                >
                  <span className="text-[14px] font-[500]"> Lorem ipsum </span>{" "}
                  dolor sit amet,
                  <span className="text-[14px] font-[500]">
                    {" "}
                    consectetur adipiscing elit.{" "}
                  </span>{" "}
                  Maecenas
                  <span className="text-[14px] font-[500]">
                    {" "}
                    pretium neque{" "}
                  </span>{" "}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="text-[12px] font-[400]"
                >
                  Sep 16, 2022 at 11:45 AM
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
