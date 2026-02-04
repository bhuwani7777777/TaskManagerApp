namespace SchoolManagementAPI.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Class { get; set; } = string.Empty;
        public int RollNo { get; set; }
        public string Email { get; set; } = string.Empty;
    }
}
