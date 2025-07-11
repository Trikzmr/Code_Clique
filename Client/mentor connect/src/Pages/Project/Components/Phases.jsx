import React from 'react'
import ProjectPhaseTable from './ProjectPhaseTable'

const projectData = {
  ProjectTitle: "Geo Location based attendance tracking system",
  Phases: [
    {
      PhaseTitle: "Research",
      Objectives: [
        "Research the project requirements",
        "Identify the target audience",
        "Gather necessary information",
        "Selection of UI ideas",
        "Selection of database (e.g., MongoDB, PostgreSQL)",
        "Selection of backend language (e.g., Node.js, Python)",
        "Selection of frontend language (e.g., React.js, Flutter)",
        "Selection of hosting platform (e.g., Vercel, AWS, Firebase)",
        "Selection of CI/CD tools (e.g., GitHub Actions, Jenkins)",
        "Selection of testing tools (e.g., Jest, Cypress)",
        "Selection of deployment tools (e.g., Docker, PM2, Nginx)"
      ]
    },
    {
      PhaseTitle: "Backend",
      Objectives: [
        "API Route: POST /api/auth/register",
        "API Route: POST /api/auth/login",
        "API Route: GET /api/auth/me",
        "API Route: POST /api/attendance/mark",
        "API Route: GET /api/attendance/my",
        "API Route: GET /api/attendance/date/:date",
        "API Route: GET /api/attendance/all",
        "API Route: GET /api/users",
        "API Route: PUT /api/users/:id/role",
        "API Route: DELETE /api/users/:id",
        "Middleware: verifyToken - Verifies JWT token",
        "Middleware: checkUserRole(role) - Validates user role",
        "Middleware: validateRegistrationData - Validates registration fields",
        "Middleware: validateLoginData - Validates login credentials",
        "Middleware: validateAttendanceData - Validates attendance marking input",
        "Middleware: errorHandler - Global error handler",
        "Middleware: verifyGeoFence - Validates location within allowed radius",
        "Design database schema: User",
        "Design database schema: Attendance",
        "Design database schema: Location",
        "Design database schema: Admin",
        "Design database schema: GeoFenceConfig (optional)"
      ]
    },
    {
      PhaseTitle: "UI Designing",
      Objectives: [
        "UI Component: Navbar",
        "UI Component: Login Form",
        "UI Component: User Dashboard",
        "UI Component: Attendance Button",
        "UI Component: User List",
        "UI Component: Attendance Table",
        "UI Feature: Real-time location marker",
        "UI Feature: Attendance status indicator",
        "UI Feature: Profile update UI",
        "UI Function: Submit form",
        "UI Function: Fetch user data",
        "UI Function: Mark attendance",
        "UI Function: Filter attendance records",
        "UI Page: Login Page",
        "UI Page: User Dashboard",
        "UI Page: Admin Panel",
        "UI Page: Attendance History",
        "UI Page: Not Found Page"
      ]
    },
    {
      PhaseTitle: "Feature Integration",
      Objectives: [
        "Feature: Geo-fence attendance",
        "Feature: Admin dashboard",
        "Feature: User login/register",
        "Feature: Attendance record history",
        "Function: Calculate distance using geo-coordinates",
        "Function: Mark attendance if within radius",
        "Function: Role-based rendering of UI elements",
        "Function: Export attendance records to CSV/PDF",
        "Component: Map display using Leaflet/Google Maps",
        "Component: QR Scanner (optional)",
        "Component: Table display for attendance history",
        "Component: Alerts/Toasts for user feedback",
        "Integration: Sync API data with frontend components",
        "Integration: Handle auth tokens for secure API calls",
        "Integration: Conditional UI rendering based on user role"
      ]
    },
    {
      PhaseTitle: "Testing",
      Objectives: [
        "List all test cases: User login success",
        "List all test cases: User login failure",
        "List all test cases: Attendance marking inside geofence",
        "List all test cases: Attendance marking outside geofence",
        "List all test cases: Admin-only access restrictions",
        "Testing Tool: Jest",
        "Testing Tool: Supertest",
        "Testing Tool: Cypress",
        "Ensure all API endpoints return correct responses",
        "Ensure all UI components render correctly for different users"
      ]
    },
    {
      PhaseTitle: "Deployment",
      Objectives: [
        "Deployment Step: Build frontend for production",
        "Deployment Step: Setup backend server (Node.js)",
        "Deployment Step: Connect to cloud-hosted MongoDB",
        "Deployment Step: Set environment variables",
        "Deployment Step: Use process manager (PM2)",
        "Deployment Step: Configure Nginx as reverse proxy",
        "Deployment Tool: Docker",
        "Deployment Tool: PM2",
        "Deployment Tool: Firebase Hosting (optional)",
        "Deployment Tool: GitHub Actions (CI/CD)",
        "Ensure successful deployment with domain configuration"
      ]
    }
  ]
};

const Phases = () => {
  return (
    <div>
      <ProjectPhaseTable data= {projectData}/>
    </div>
  )
}

export default Phases
