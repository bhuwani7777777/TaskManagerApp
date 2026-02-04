using Microsoft.AspNetCore.Mvc;
using SchoolManagementAPI.Data;
using SchoolManagementAPI.Models;
using SchoolManagementAPI.Data;
using SchoolManagementAPI.Models;


namespace SchoolManagementAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public StudentsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetStudents()
        {
            return Ok(_context.Students.ToList());
        }

        [HttpPost]
        public IActionResult AddStudent(Student student)
        {
            _context.Students.Add(student);
            _context.SaveChanges();
            return Ok(student);
        }
    }
}
