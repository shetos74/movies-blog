import Image from "next/image";

export default async function animeReviewPage({
  params,
}: {
  params: Promise<{ animeId: string }>;
}) {
  const { animeId } = await params;
  // console.log("🚀 ~ animeReviewPage ~ animeId:", animeId);

  return (
    <div className="flex flex-col items-center gap-4">
      anime review {animeId}
      <Image
        src={"/jujutsu-kaisen.gif"}
        alt="jujutsu kaisen"
        quality={100}
        width={1000}
        height={700}
      />
      <p>
        here is my opinion on jjk, this shit remindes me of eldin ring when i maxed out the strength and HP but leaving the rest unntouched,
        it has alot of interesting characters with with kinda a complex emotions with fun and creative power system and all that portrayed with presumably one of the best animation if it is not the best in the shonin anime
        category, buuuuuutt🍑 it has some problems.
      </p>
      <Image
        src={"/jujutsu-kaisen4.gif"}
        alt="jujutsu kaisen"
        width={400}
        height={700}
        />

        <p>
          the main problem is the amount of complexity this story has, it forces the anime to explain almost everything EVEN at a climax action moment, the introduction of a new arc or event that he has to explain alot and the worst part it doesnt necessary means that this amount of explaintion
           is enough to get the full picture of what is the big picture, the story itself is good because how the characters are more than just one mono character trait and how the , but the way it is presented has alot of issues and that is what jjk fails to do.
           the second issue for is how the characters don't ask the questions that must be asked over complicating things does not necessary makes things better yes the anime has avoided the lazy writing trap and have done some high quality character writing
           yet it didn't care enough of how to deliver some events
        </p>
        <Image
        src={"/jujutsu-kaisen2.gif"}
        alt="jujutsu kaisen"
        width={400}
        height={700}
        />

        <p>
          the characters in this anime are really interesting character, there are characters that barely have screen time yet it has great impact on the story is really convinent way, toji is one of them, he is a character denied by his clan because of how he missing cursed energy
          and how he defeated one of the strongest sorcores easily, killing the star palsma vessel that changed the fate of many thing in the story and geto depression which portrayed in the best possible way
          with gojo being gojo, all of this is good but some character seems to be stif characters even though there are alot of reason for this but that makes the watching experience for them is kinda boring,
          yuji the main character
        </p>
        <Image
        src={"/jujutsu-kaisen3.gif"}
        alt="jujutsu kaisen"
        width={300}
        height={700}
        />
        <p>
          overall, it is a MUST watch anime, animation and the characters are great and its hard to tell what happens next, it also hugely inspired by naruto in alot of the element but with a much darker twists,
          i gave it 8/10
        </p>
    </div>
  );
}
