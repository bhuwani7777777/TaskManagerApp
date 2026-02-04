using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using SchoolManagementAPI.Data;
using SchoolManagementAPI.Models;


namespace AuthAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            if (await _context.Users.AnyAsync(u => u.Email == user.Email))
                return BadRequest("Email already exists");

            user.PasswordHash = HashPassword(user.PasswordHash);
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok("User registered successfully");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User loginData)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == loginData.Email);
            if (user == null) return Unauthorized("User not found");

            if (user.PasswordHash != HashPassword(loginData.PasswordHash))
                return Unauthorized("Invalid password");

            // TODO: Generate JWT token
            return Ok(new { user.Id, user.Name, user.Email, user.Role });
        }

        private string HashPassword(string password)
        {
            using var sha = SHA256.Create();
            var bytes = Encoding.UTF8.GetBytes(password);
            var hash = sha.ComputeHash(bytes);
            return Convert.ToBase64String(hash);
        }
    }
}
