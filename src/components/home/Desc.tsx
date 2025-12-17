import { Leaf } from "lucide-react";

const Desc = () => {
  return (
    <section className="bg-primary text-primary-foreground py-32 flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20  text-primary-foreground mb-8 w-fit">
        <Leaf className="w-4 h-4" />
        <span className="text-sm font-medium">
          About Shefa Health & Wellbeing
        </span>
      </div>

      <div className="text-2xl text-center max-w-4xl leading-relaxed">
        <p>
          Shefa Health & Wellbeing was created to provide women with a safe,
          nurturing space to understand their bodies, heal their relationship
          with wellbeing, and approach midlife with confidence. Our philosophy
          blends science, holistic health, and emotional support to guide women
          toward empowerment and sustainable transformation.
        </p>
      </div>
    </section>
  );
};

export default Desc;
