import { Braces, Code2, Database, GitBranch, ShieldCheck } from 'lucide-react';

export const profile = {
  name: 'Maria Rica A. Valenzuela',
  email: 'mariaricavalenzuela@gmail.com',
  location: 'Quezon City, Metro Manila, Philippines',
  github: 'https://github.com/MariaRica1',
  linkedin: 'https://ph.linkedin.com/in/maria-rica-valenzuela-176672285',
};

export const projects = [
  {
    title: 'HRIS & Payroll Validation',
    shortName: 'HRIS',
    category: 'Functional',
    description: 'Validating employee workflows, payroll processes, and reports for accurate, consistent HR data.',
    tags: ['Functional Testing', 'Payroll', 'Defect Tracking'],
    tests: 'HR & payroll workflows',
    type: 'payroll',
    areas: ['Employee management', 'Attendance', 'Leave management', 'Payroll', 'Benefits', 'Employee information'],
    focus: ['Final Pay', 'Government Contributions', 'HR reports', 'Timekeeping reports', 'Government reports'],
    methods: ['Test case creation', 'Test execution', 'Defect reporting', 'Requirements clarification'],
    details: [
      'Created and executed test cases for employee management, attendance, leave, payroll, benefits, and employee information.',
      'Tested payroll processes, including Final Pay and Government Contributions.',
      'Validated HR, Timekeeping, and Government Reports for data accuracy and consistency.',
      'Documented reproducible defects and collaborated with developers and stakeholders to clarify requirements and resolve issues.',
    ],
  },
  {
    title: 'End-to-End Recruitment Testing',
    shortName: 'Recruitment',
    category: 'End-to-End',
    description: 'Following the complete hiring journey, from job requisition and posting to candidate selection and hiring.',
    tags: ['End-to-End', 'Integration', 'UI Testing'],
    tests: 'Requisition → hiring',
    type: 'recruitment',
    areas: ['Job requisition', 'Job posting', 'Candidate selection', 'Hiring'],
    focus: ['Candidate information', 'Application status', 'Hiring processes'],
    methods: ['Functional testing', 'Regression testing', 'Integration testing', 'UI testing'],
    details: [
      'Tested end-to-end recruitment workflows from job requisition and posting to candidate selection and hiring.',
      'Created and executed test cases based on business requirements and recruitment processes.',
      'Performed functional, regression, integration, and UI testing; validated candidate information and application status.',
      'Retested resolved defects, ran regression checks, and collaborated with developers and project stakeholders on expected behavior.',
    ],
  },
  {
    title: 'Inventory System & Reusable Automation',
    shortName: 'Inventory',
    category: 'Automation',
    description: 'Checking cross-module transactions and business rules, with reusable Playwright components for complex interfaces.',
    tags: ['Playwright', 'TypeScript', 'Custom Fixtures'],
    tests: 'Cross-module validation',
    type: 'inventory',
    areas: ['Accounts Payable', 'Accounts Receivable', 'Inventory', 'Reports'],
    focus: ['Date pickers', 'Item tables', 'Paginated lookups'],
    methods: ['Positive cases', 'Negative cases', 'Boundary cases', 'Edge cases'],
    details: [
      'Created and executed test cases for Accounts Payable, Accounts Receivable, Inventory, and Reports.',
      'Validated required fields, item selection, status transitions, transaction calculations, and cross-module workflows.',
      'Prepared sales test scenarios for create/edit actions, permissions, business rules, and history logs.',
      'Built reusable Playwright components for date pickers, item tables, and paginated lookups using TypeScript and custom fixtures.',
      'Designed positive, negative, boundary, and edge cases; reviewed business processes with the UI/UX Designer, Project Manager, and project team.',
    ],
  },
];

export const skills = [
  { icon: Code2, title: 'Playwright automation', body: 'Maintainable TypeScript tests using page objects, fixtures, and reusable UI components.', code: 'page objects · fixtures · components', tags: 'Playwright · TypeScript · POM' },
  { icon: ShieldCheck, title: 'Manual & functional', body: 'Functional, regression, integration, end-to-end, UI, and user acceptance testing.', code: 'explore → execute → retest', tags: 'Manual testing · Regression · UAT' },
  { icon: Braces, title: 'Test documentation', body: 'Clear scenarios, prepared test data, reproducible defects, and documented results.', code: 'scenario → steps → expected result', tags: 'Test cases · Jira · Bug tracking' },
  { icon: Database, title: 'Data & business rules', body: 'SQL skills and hands-on validation of payroll, reports, transactions, and cross-module workflows.', code: 'inputs → business rules → results', tags: 'SQL · Data accuracy · Validation' },
  { icon: GitBranch, title: 'Planning & collaboration', body: 'Requirements analysis and test planning with developers, stakeholders, and project teams.', code: 'clarify → plan → test → resolve', tags: 'Agile / Scrum · Test planning' },
];

export const experience = [
  { title: 'Software Quality Assurance', company: 'Intellismart Technology, Inc.', period: 'April 2025 – Present', current: true, points: [
    'Create and execute test cases based on business requirements.',
    'Document defects, track fixes in Jira, and perform retesting.',
    'Perform functional, regression, integration, and end-to-end testing.',
    'Develop Playwright tests with TypeScript, page objects, and fixtures.',
  ] },
  { title: 'Quality Assurance Intern', company: 'Tito Solutions Philippines, Inc.', period: 'September 2024 – December 2024', current: false, points: [
    'Assisted with test case development and execution for application validation.',
    'Conducted functional and regression testing for web and mobile applications.',
    'Identified defects in Jira, performed retesting, and maintained documentation.',
    'Collaborated with development teams to resolve issues.',
  ] },
];
