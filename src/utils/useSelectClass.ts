export const useSelectClass = (name: String): string => {
  switch (name) {
    case "Sent" || "In progress":
      return "badge__sent";
      break;
    case "Answered":
      return "badge__answered";
      break;
    case "Rejected":
      return "badge__rejected";
      break;

    default:
      return "badge__no-respond";
      break;
  }
};
