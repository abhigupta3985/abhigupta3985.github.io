const GitHubStats = () => {
  const username = 'abhigupta3985';

  return (
    <section id="github-stats" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          GitHub Statistics
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          My coding journey and contribution metrics
        </p>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* GitHub Streak Stats */}
          <div className="flex justify-center animate-fade-in">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0F172A&ring=8B5CF6&fire=06B6D4&currStreakLabel=06B6D4`}
              alt="GitHub Streak Stats"
              className="w-full max-w-2xl rounded-xl card-shadow border border-border"
            />
          </div>

          {/* GitHub Stats Cards */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0F172A&title_color=8B5CF6&icon_color=06B6D4&text_color=94A3B8`}
                alt="GitHub Stats"
                className="w-full rounded-xl card-shadow border border-border"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0F172A&title_color=8B5CF6&text_color=94A3B8`}
                alt="Top Languages"
                className="w-full rounded-xl card-shadow border border-border"
              />
            </div>
          </div>

          {/* GitHub Calendar */}
          <div id="github-calendar" className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-card p-6 rounded-xl border border-border card-shadow">
              <h3 className="text-xl font-semibold mb-4 text-center">Contribution Graph</h3>
              <img
                src={`https://ghchart.rshah.org/8B5CF6/${username}`}
                alt="GitHub Contribution Graph"
                className="w-full rounded-lg"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
          </div>

          {/* GitHub Activity Graph */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true&bg_color=0F172A&color=8B5CF6&line=06B6D4&point=94A3B8`}
              alt="GitHub Activity Graph"
              className="w-full rounded-xl card-shadow border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
