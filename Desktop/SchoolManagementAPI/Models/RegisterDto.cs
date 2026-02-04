namespace SchoolManagementAPI.Models
{
    public class RegisterDto
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; } // student by default
    }
}
