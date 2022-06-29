import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";

const posts = [
  {
    id: 1,

    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/42099466?v=4",
      name: "Rômulo Valentim",
      role: "Web Developer",
    },

    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-28 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post, index) => {
            return (
              <Post
                key={index}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
