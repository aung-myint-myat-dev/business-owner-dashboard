export const PRODUCTS = [
  {
    id: 1,
    name: "HR Management System",
    description:
      "A comprehensive human resource management system for managing employees, attendance, payroll, leave requests, and performance.",
    status: "production",
    user_count: 125,
    features: [
      "Employee Management",
      "Attendance Tracking",
      "Payroll Management",
      "Leave Management",
      "Performance Evaluation",
    ],
  },
  {
    id: 2,
    name: "Inventory Management System",
    description:
      "An inventory management solution for tracking stock levels, managing suppliers, monitoring purchases, and controlling warehouse operations.",
    status: "production",
    user_count: 85,
    features: [
      "Stock Management",
      "Supplier Management",
      "Purchase Management",
      "Warehouse Management",
      "Inventory Reports",
    ],
  },
  {
    id: 3,
    name: "Accounting Management System",
    description:
      "A financial management system designed to simplify accounting operations, track expenses, manage invoices, and generate financial reports.",
    status: "developing",
    user_count: 0,
    features: [
      "Income & Expense Tracking",
      "Invoice Management",
      "Financial Reporting",
      "Account Management",
      "Tax Management",
    ],
  },
  {
    id: 4,
    name: "School Management System",
    description:
      "An educational management platform for managing students, teachers, classes, examinations, and academic records.",
    status: "maintenance",
    user_count: 230,
    features: [
      "Student Management",
      "Teacher Management",
      "Class Scheduling",
      "Examination Management",
      "Academic Reports",
    ],
  },
  {
    id: 5,
    name: "Point of Sale System",
    description:
      "A modern point of sale solution for managing retail transactions, sales, customers, inventory, and business performance.",
    status: "production",
    user_count: 68,
    features: [
      "Sales Management",
      "Product Management",
      "Customer Management",
      "Payment Processing",
      "Sales Analytics",
    ],
  },
  {
    id: 6,
    name: "Customer Relationship Management",
    description:
      "A CRM platform designed to manage customer relationships, track sales opportunities, organize leads, and improve customer engagement.",
    status: "developing",
    user_count: 0,
    features: [
      "Customer Management",
      "Lead Management",
      "Sales Pipeline",
      "Task Management",
      "Customer Analytics",
    ],
  },
];

export const ROUTES = {
  INDEX: "/ophir/products",
  CREATE: "/ophir/products/create",
  EDIT: "/ophir/products/:id/edit",
}

export const PRODUCT_STATUS_COLOR_CLASS = {
  production: "bg-green-500/10 text-green-600 border-green-500/20",
  maintenance: "bg-red-500/10 text-red-600 border-red-500/20",
  developing: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
};