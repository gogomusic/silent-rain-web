import TextType from "./components/TextType";

export default async function page() {
  return (
    <div className="flex items-center justify-center h-120 px-5">
      <TextType
        className="text-xl lg:text-6xl font-heading"
        text={["Welcome to Silent Rain!"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="_"
        deletingSpeed={50}
        cursorBlinkDuration={0.5}
        loop={false}
      />
    </div>
  );
}
