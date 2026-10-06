import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib import colors

def create_resume():
    pdf_path = "public/resume.pdf"
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#000000')
    )
    
    sub_title_style = ParagraphStyle(
        'SubTitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=14,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#222222')
    )
    
    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#111111')
    )
    
    heading_style = ParagraphStyle(
        'HeadingStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        spaceBefore=8,
        spaceAfter=3,
        textColor=colors.HexColor('#000000')
    )
    
    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#222222')
    )
    
    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        leftIndent=14,
        firstLineIndent=-10,
        spaceAfter=2.5,
        textColor=colors.HexColor('#222222')
    )
    
    job_header_style = ParagraphStyle(
        'JobHeaderStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#000000')
    )
    
    job_date_style = ParagraphStyle(
        'JobDateStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=14,
        alignment=TA_RIGHT,
        textColor=colors.HexColor('#000000')
    )

    story = []

    # Header
    story.append(Paragraph("ANURAG KHONDE", name_style))
    story.append(Paragraph("Java Developer", sub_title_style))
    story.append(Spacer(1, 4))
    
    contact_text = (
        "<b>Phone:</b> +91-9970601147 &nbsp;|&nbsp; "
        "<b>Email:</b> <a href='mailto:anuragkhonde6@gmail.com'>anuragkhonde6@gmail.com</a> &nbsp;|&nbsp; "
        "<b>LinkedIn:</b> <a href='https://www.linkedin.com/in/anuragkhonde/'>LinkedIn</a> &nbsp;|&nbsp; "
        "<b>GitHub:</b> <a href='https://github.com/AKSTAR1147'>GitHub</a>"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 6))

    def section_header(title):
        story.append(Paragraph(title, heading_style))
        story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#333333'), spaceBefore=1, spaceAfter=5))

    # ABOUT
    section_header("ABOUT")
    about_text = (
        "Software Engineer with professional experience in backend application development, with hands-on expertise in Java, "
        "Spring Boot, Spring Security, JPA/Hibernate, REST APIs, and PostgreSQL through backend projects and development "
        "experience. Interested in building scalable, secure, and maintainable backend systems."
    )
    story.append(Paragraph(about_text, body_style))
    story.append(Spacer(1, 6))

    # EDUCATION
    section_header("EDUCATION")
    edu_1 = (
        "<b>Pune Institute of Computer Technology</b> <font color='#444444'>— Bachelor of Engineering</font>"
        "<font color='#111111'> (2022 - 2026)</font><br/>"
        "<font color='#555555'>Pune, Maharashtra</font>"
    )
    story.append(Paragraph(edu_1, body_style))
    story.append(Spacer(1, 3))
    
    edu_2 = (
        "<b>Model Jr College of Science</b> <font color='#444444'>— Higher Secondary Certificate</font>"
        "<font color='#111111'> (2022)</font><br/>"
        "<font color='#555555'>Arvi, Maharashtra</font>"
    )
    story.append(Paragraph(edu_2, body_style))
    story.append(Spacer(1, 3))
    
    edu_3 = (
        "<b>Krishak English Vidyalaya</b> <font color='#444444'>— Secondary School Certificate</font>"
        "<font color='#111111'> (2020)</font><br/>"
        "<font color='#555555'>Arvi, Maharashtra</font>"
    )
    story.append(Paragraph(edu_3, body_style))
    story.append(Spacer(1, 6))

    # PROFESSIONAL EXPERIENCE
    section_header("PROFESSIONAL EXPERIENCE")
    story.append(Paragraph("<b>Associate Software Engineer</b> <font color='#555555' size=9>(Simplify Healthcare)</font> &nbsp;&nbsp; <b>JUL 2026 – CURRENT</b>", job_header_style))
    story.append(Paragraph("<b>Intern Software Engineer</b> <font color='#555555' size=9>(Simplify Healthcare)</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>JAN 2026 – JUN 2026</b>", job_header_style))
    story.append(Spacer(1, 3))
    
    exp_bullets = [
        "Worked on <b>Nova</b>, migrating multiple healthcare insurance applications into a unified platform.",
        "Resolved application <b>bugs</b> across multiple modules and delivered development tasks and user stories within <b>Agile/Scrum</b> sprints.",
        "Worked with <b>PostgreSQL</b> for database operations, including queries and stored procedures supporting application functionality.",
        "Collaborated with <b>QA and UI</b> teams to integrate, validate, and test features end-to-end.",
        "Used <b>observability and application monitoring</b> to troubleshoot issues and validate application behavior."
    ]
    for b in exp_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
    story.append(Spacer(1, 6))

    # INTERNSHIP
    section_header("INTERNSHIP")
    story.append(Paragraph("<b>Web Development Intern</b>, <i>UptoSkills</i> &nbsp;&nbsp;&nbsp;&nbsp; <b>JAN 2025 – APR 2025</b>", job_header_style))
    story.append(Spacer(1, 3))
    intern_bullets = [
        "Developed and integrated RESTful APIs using <b>Spring Boot</b> and worked on backend feature implementation and service-layer logic.",
        "Worked with <b>Spring Data JPA and MySQL</b> for database operations, entity mapping, and data persistence.",
        "Contributed to frontend development using <b>HTML, Bootstrap, JavaScript, and basic React.js</b> for responsive UIs."
    ]
    for b in intern_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
    story.append(Spacer(1, 6))

    # PERSONAL PROJECTS
    section_header("PERSONAL PROJECTS")
    story.append(Paragraph("<b>Star Blog Blogspot</b> | <i>Spring Boot, Spring Data JPA, Spring Security, Spring MVC, Thymeleaf</i>", job_header_style))
    story.append(Spacer(1, 3))
    proj_bullets = [
        "Developed a secure Spring Boot blogging platform with <b>user authentication</b> for content creation and comments.",
        "Implemented <b>role-based access control (RBAC)</b> with Spring Security, defining distinct privileges for 'Author' and 'User' roles.",
        "Reduced backend query times by <b>25%</b> by optimizing with Hibernate and using Thymeleaf for <b>server-side rendering</b>.",
        "Deployed the application on <b>Live domain with Render</b> and the database on <b>TiDB cloud</b>."
    ]
    for b in proj_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
    story.append(Spacer(1, 6))

    # TECHNICAL SKILLS
    section_header("TECHNICAL SKILLS")
    skills = [
        "<b>Programming Languages:</b> Java(Core, Java8+), C#, JavaScript, SQL, HTML, CSS.",
        "<b>Frameworks & Libraries:</b> Spring Boot, .NET, Spring MVC, Spring Security, JPA, Spring Data JPA, Apache Kafka, Thymeleaf, SpringAI.",
        "<b>Databases:</b> MySQL, PgSQL",
        "<b>Developer Tools:</b> Git, GitHub, VS Code, IntelliJ, Visual Studio, Postman, Unleash",
        "<b>Cloud Technologies:</b> Microsoft Azure, GCP.",
        "<b>Core Subjects:</b> DBMS, OOP, DSA, OS, Microservices Architecture, Distributed systems."
    ]
    for s in skills:
        story.append(Paragraph(f"• {s}", bullet_style))

    doc.build(story)
    print("Resume PDF successfully generated at public/resume.pdf")

if __name__ == "__main__":
    create_resume()
