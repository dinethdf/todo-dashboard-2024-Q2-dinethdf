import { TABLE_HEAD, TABLE_ROWS } from "./data";

import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Checkbox,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "./MTailwind";

export const TaskList = async () => {
  let response = await fetch(
    "https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do"
  );
  let data = await response.json();
  data = data.slice(0, 8);

  const data_up = data.map((data: { createdAt: string | number | Date }) => {
    const d = new Date(data.createdAt);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (data.createdAt = months[d.getMonth() + 1] + "  -  " + d.getDate());
  });

  return (
    <div className="bg-white border-2 rounded-xl p-2 flex flex-col items-center justify-center md:col-span-2 md:row-span-2">
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-0 flex flex-col justify-between md:flex-row md:items-center">
            <div>
              <Typography
                className="text-[20px] font-[600] text-[#000]"
                variant="h5"
                color="blue-gray"
              >
                Task
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 pl-2"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  { id, createdBy, priority, todo, completed, createdAt },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-2 "
                    : "p-2 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <div className="flex items-center gap-1 ">
                          {completed === true ? (
                            <Checkbox color="green" defaultChecked />
                          ) : (
                            <Checkbox color="amber" icon={"-"} defaultChecked />
                          )}
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-norma font-[500] "
                        >
                          {todo}
                        </Typography>
                        {completed === true ? (
                          ""
                        ) : (
                          <Typography
                            variant="paragraph"
                            color="blue-gray"
                            className="font-normal text-[12px] pt-1 "
                          >
                            Mark as done
                          </Typography>
                        )}
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {createdBy}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            className="font-[600]"
                            size="sm"
                            variant="ghost"
                            value={priority}
                            color={
                              priority === "LOW"
                                ? "blue"
                                : priority === "HIGH"
                                ? "amber"
                                : "red"
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col w-16">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {createdAt}
                            </Typography>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
          <div className="flex items-center gap-2">
            <IconButton variant="text" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.0}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </IconButton>
            <IconButton variant="outlined" size="sm">
              1
            </IconButton>
            <IconButton variant="text" size="sm">
              2
            </IconButton>
            <IconButton variant="text" size="sm">
              3
            </IconButton>
            <IconButton variant="text" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.0"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </IconButton>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
