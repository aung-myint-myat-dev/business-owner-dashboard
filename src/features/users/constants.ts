export const USERS = [
  { id: 1, company_id: 1, name: "Aung Myint Myat", username: "aungmyint", email: "aungmyint@gmail.com", role: "Admin", status: "active" },
  { id: 2, company_id: 2, name: "Kyaw Kyaw", username: "kyawkyaw", email: "kyawkyaw@gmail.com", role: "Admin", status: "active" },
  { id: 3, company_id: 3, name: "Su Su", username: "susu", email: "susu@gmail.com", role: "Customer", status: "active" },
  { id: 4, company_id: 4, name: "Hla Hla", username: "hlahla", email: "hlahla@gmail.com", role: "Customer", status: "inactive" },
  { id: 5, company_id: 5, name: "Myo Min", username: "myomin", email: "myomin@gmail.com", role: "Employee", status: "active" },
  { id: 6, company_id: 6, name: "Thant Zin", username: "thantzin", email: "thantzin@gmail.com", role: "Employee", status: "active" },
  { id: 7, company_id: 7, name: "Ei Mon", username: "eimon", email: "eimon@gmail.com", role: "Customer", status: "active" },
  { id: 8, company_id: 8, name: "Min Thu", username: "minthu", email: "minthu@gmail.com", role: "Employee", status: "inactive" },
  { id: 9, company_id: 9, name: "Nandar Win", username: "nandarwin", email: "nandarwin@gmail.com", role: "Customer", status: "active" },
  { id: 10, company_id: 10, name: "Zaw Zaw", username: "zawzaw", email: "zawzaw@gmail.com", role: "Admin", status: "inactive" },
];

export const USER_STATUS_COLOR_CLASS = {
  active: "bg-green-500/10 text-green-600 border-green-500/20",
  inactive: "bg-red-500/10 text-red-600 border-red-500/20",
  banned: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
};