import { NextResponse } from "next/server"
import PDFDocument from "pdfkit"

export async function GET() {
  // Create a document
  const doc = new PDFDocument({ margin: 50 })

  // Set response headers
  const headers = new Headers()
  headers.set("Content-Type", "application/pdf")
  headers.set("Content-Disposition", 'attachment; filename="Mohammed_Elouafi_CV.pdf"')

  // Buffer to store PDF
  const chunks: Buffer[] = []

  // Collect data chunks
  doc.on("data", (chunk) => chunks.push(chunk))

  // Return the PDF buffer when done
  const pdfPromise = new Promise<Buffer>((resolve) => {
    doc.on("end", () => {
      resolve(Buffer.concat(chunks))
    })
  })

  // Add content to PDF
  doc.fontSize(20).font("Helvetica-Bold").text("Full Stack Developer", { align: "center" })
  doc.moveDown(0.5)
  doc.fontSize(16).font("Helvetica-Bold").text("Mohammed Abd Eljalil Elouafi", { align: "center" })
  doc.fontSize(12).font("Helvetica").text("Casablanca, Morocco", { align: "center" })
  doc.text("+212 767 660 769 | abdeljalilelouafi2@gmail.com", { align: "center" })
  doc.text("Linkdin: AbdeljalilElouafi | Leetcode | Github | Portfolio", { align: "center" })

  doc.moveDown(1)
  doc.fontSize(14).font("Helvetica-Bold").text("Profile")
  doc.moveDown(0.5)
  doc
    .fontSize(12)
    .font("Helvetica")
    .text(
      'Currently a student at YouCode-UM6P Benguerir in web development, passionate about building innovative solutions. I\'m looking for an end-of-year internship ("PFA") to apply my development skills in a dynamic company.',
    )

  doc.moveDown(1)
  doc.fontSize(14).font("Helvetica-Bold").text("Academic Projects")
  doc.moveDown(0.5)

  // YouCamp Project
  doc.fontSize(12).font("Helvetica-Bold").text("YouCamp – Booking Platform for Campers and Travelers")
  doc
    .fontSize(12)
    .font("Helvetica")
    .text(
      "• Developed a platform allowing campers and travelers to book spots in rural campgrounds and hostels in places like Moroccan mountains and villages.",
    )
  doc.text("• Integrated advanced search by location and accommodation type")
  doc.text(
    "• Backend with Laravel, client-side logic using vanilla JavaScript, and TailwindCSS for modern, responsive design",
  )
  doc.text("• Technologies: Laravel, JavaScript (Vanilla), TailwindCSS")
  doc.text("• GitHub - YouCamp")

  doc.moveDown(0.5)

  // Eventbrite Clone Project
  doc.fontSize(12).font("Helvetica-Bold").text("Eventbrite-Clone – Event Management App")
  doc
    .fontSize(12)
    .font("Helvetica")
    .text("• Created an Eventbrite clone for users to create, manage, and track events.")
  doc.text("• Worked in a collaborative team environment using Git")
  doc.text("• Technologies: PHP (OOP), JavaScript, TailwindCSS")
  doc.text("• GitHub - EventHub")

  doc.moveDown(1)
  doc.fontSize(14).font("Helvetica-Bold").text("Technical Skills")
  doc.moveDown(0.5)
  doc.fontSize(12).font("Helvetica").text("Languages: PHP (OOP), Python, JavaScript, HTML, CSS, MySQL, ReactJS")
  doc.text("Frameworks: Laravel, Bootstrap, TailwindCSS, Next.js, Node.js")
  doc.text("Databases: MySQL, PostgreSQL")
  doc.text("Tools: Jira, Git, Docker")
  doc.text("Data Analysis: Power BI")
  doc.text("Modeling: UML")

  doc.moveDown(1)
  doc.fontSize(14).font("Helvetica-Bold").text("Soft Skills")
  doc.moveDown(0.5)
  doc.fontSize(12).font("Helvetica").text("✔ Effective communication")
  doc.text("✔ Critical thinking")
  doc.text("✔ Teamwork")

  doc.moveDown(1)
  doc.fontSize(14).font("Helvetica-Bold").text("Languages")
  doc.moveDown(0.5)
  doc.fontSize(12).font("Helvetica").text("English: C1")
  doc.text("French: B1")
  doc.text("Arabic: Native")

  doc.moveDown(1)
  doc.fontSize(14).font("Helvetica-Bold").text("Education")
  doc.moveDown(0.5)
  doc.fontSize(12).font("Helvetica-Bold").text("Full Stack Development (YouCode UM6P Benguerir)")
  doc.fontSize(12).font("Helvetica").text("Benguerir, Morocco | Oct 2024 – Ongoing")

  doc.moveDown(0.5)
  doc.fontSize(12).font("Helvetica-Bold").text("Data Science (ALX)")
  doc.fontSize(12).font("Helvetica").text("Casablanca, Morocco | Oct 2023 – Ongoing")

  doc.moveDown(0.5)
  doc.fontSize(12).font("Helvetica-Bold").text("Bachelor's Degree in Biology and Geology")
  doc.fontSize(12).font("Helvetica").text("FP Beni Mellal, Morocco | Jul 2023")

  doc.moveDown(0.5)
  doc.fontSize(12).font("Helvetica-Bold").text("Scientific Baccalaureate")
  doc.fontSize(12).font("Helvetica").text("Beni Mellal, Morocco | Jun 2019")

  // Finalize the PDF
  doc.end()

  // Get the PDF buffer
  const pdfBuffer = await pdfPromise

  // Return the PDF as a response
  return new NextResponse(pdfBuffer, { headers })
}
