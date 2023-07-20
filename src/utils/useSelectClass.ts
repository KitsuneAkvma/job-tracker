export const useSelectClass = (name: String): string => {
  switch (name) {
    case "Sent" || "In progress":
      return "badge--sent";
      break;
    case "Answered":
      return "badge--answered";
      break;
    case "Rejected":
      return "badge--rejected";
      break;

    default:
      return "badge--no-respond";
      break;
  }
};
