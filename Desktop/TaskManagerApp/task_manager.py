import tkinter as tk
from tkinter import messagebox, ttk
import json
import os
from datetime import datetime

TASKS_FILE = "tasks.json"

class TaskManagerApp:
    def __init__(self, root):
        self.root = root
        self.root.title("📝 Task Notes & Reminder")
        self.root.geometry("700x600")
        self.root.config(bg="#f0f2f5")

        # Header
        tk.Label(root, text="Task Manager", font=("Segoe UI", 20, "bold"), bg="#f0f2f5", fg="#333").pack(pady=10)

        # Clock and Date
        self.clock_label = tk.Label(root, font=("Segoe UI", 12), bg="#f0f2f5", fg="#333")
        self.clock_label.pack(anchor='ne', padx=20)

        self.date_label = tk.Label(root, font=("Segoe UI", 12, "italic"), bg="#f0f2f5", fg="#555")
        self.date_label.pack(anchor='ne', padx=20)

        self.update_clock()

        # Input Fields
        form_frame = tk.Frame(root, bg="#f0f2f5")
        form_frame.pack(pady=10)

        tk.Label(form_frame, text="Title:", bg="#f0f2f5").grid(row=0, column=0, padx=5, sticky='e')
        self.title_entry = tk.Entry(form_frame, width=40)
        self.title_entry.grid(row=0, column=1, padx=5)

        tk.Label(form_frame, text="Date (YYYY-MM-DD):", bg="#f0f2f5").grid(row=1, column=0, padx=5, sticky='e')
        self.date_entry = tk.Entry(form_frame)
        self.date_entry.grid(row=1, column=1, padx=5)

        tk.Label(form_frame, text="Time (HH:MM):", bg="#f0f2f5").grid(row=2, column=0, padx=5, sticky='e')
        self.time_entry = tk.Entry(form_frame)
        self.time_entry.grid(row=2, column=1, padx=5)

        tk.Label(form_frame, text="Description:", bg="#f0f2f5").grid(row=3, column=0, padx=5, sticky='ne')
        self.desc_text = tk.Text(form_frame, width=30, height=3)
        self.desc_text.grid(row=3, column=1, padx=5)

        # Buttons
        btn_frame = tk.Frame(root, bg="#f0f2f5")
        btn_frame.pack(pady=10)

        tk.Button(btn_frame, text="➕ Add Task", command=self.add_task, bg="#4caf50", fg="white").grid(row=0, column=0, padx=5)
        tk.Button(btn_frame, text="🗑 Remove Task", command=self.remove_task, bg="#f44336", fg="white").grid(row=0, column=1, padx=5)
        tk.Button(btn_frame, text="🔁 Refresh", command=self.display_tasks, bg="#2196f3", fg="white").grid(row=0, column=2, padx=5)

        # Task List
        self.tree = ttk.Treeview(root, columns=("Title", "Date", "Time", "Description"), show='headings', height=12)
        for col in self.tree["columns"]:
            self.tree.heading(col, text=col)
            self.tree.column(col, anchor='center')
        self.tree.pack(pady=10, fill="x", padx=20)

        # Load and display tasks
        self.tasks = self.load_tasks()
        self.display_tasks()

    def update_clock(self):
        now = datetime.now()
        time_str = now.strftime("%I:%M:%S %p")
        date_str = now.strftime("%A, %d %B %Y")
        self.clock_label.config(text=f"🕒 {time_str}")
        self.date_label.config(text=f"📅 {date_str}")
        self.root.after(1000, self.update_clock)

    def add_task(self):
        title = self.title_entry.get().strip()
        date = self.date_entry.get().strip()
        time_val = self.time_entry.get().strip()
        desc = self.desc_text.get("1.0", tk.END).strip()

        if not title or not date or not time_val:
            messagebox.showwarning("Input Error", "Please fill in all required fields.")
            return

        try:
            datetime.strptime(date, "%Y-%m-%d")
            datetime.strptime(time_val, "%H:%M")
        except ValueError:
            messagebox.showerror("Format Error", "Invalid date or time format.")
            return

        task = {
            "title": title,
            "date": date,
            "time": time_val,
            "description": desc
        }

        self.tasks.append(task)
        self.save_tasks()
        self.display_tasks()
        self.clear_fields()

    def remove_task(self):
        selected_item = self.tree.selection()
        if not selected_item:
            messagebox.showwarning("Select Task", "Please select a task to remove.")
            return

        index = self.tree.index(selected_item)
        del self.tasks[index]
        self.save_tasks()
        self.display_tasks()

    def display_tasks(self):
        self.tree.delete(*self.tree.get_children())
        sorted_tasks = sorted(self.tasks, key=lambda x: (x['date'], x['time']))
        for task in sorted_tasks:
            self.tree.insert("", tk.END, values=(task["title"], task["date"], task["time"], task["description"]))

    def clear_fields(self):
        self.title_entry.delete(0, tk.END)
        self.date_entry.delete(0, tk.END)
        self.time_entry.delete(0, tk.END)
        self.desc_text.delete("1.0", tk.END)

    def save_tasks(self):
        with open(TASKS_FILE, "w") as f:
            json.dump(self.tasks, f, indent=4)

    def load_tasks(self):
        if not os.path.exists(TASKS_FILE) or os.path.getsize(TASKS_FILE) == 0:
            return []
        with open(TASKS_FILE, "r") as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                return []

# Launch the app
if __name__ == "__main__":
    root = tk.Tk()
    app = TaskManagerApp(root)
    root.mainloop()
