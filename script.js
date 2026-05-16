document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.project-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');

      const targetId = tab.getAttribute('data-target');

      // Hide all contents
      contents.forEach(content => {
        if (content.id === targetId) {
          content.classList.remove('hidden');
          // small delay to allow display:grid to apply before triggering opacity transition
          setTimeout(() => {
            content.classList.add('active');
          }, 10);
        } else {
          content.classList.remove('active');
          content.classList.add('hidden');
        }
      });
    });
  });
});
