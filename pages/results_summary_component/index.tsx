import { NextFont } from "next/dist/compiled/@next/font"
import { Hanken_Grotesk } from "next/font/google"
import Image from "next/image"
import IconMemory from "./icon-memory.svg"
import IconReaction from "./icon-reaction.svg"
import IconVerbal from "./icon-verbal.svg"
import IconVisual from "./icon-visual.svg"
// import { twMerge } from "tailwind-merge"
// import { JsonObjectExpression } from "typescript"

const hanken_grotesk: NextFont = Hanken_Grotesk({
    subsets: ['latin'],
    weight: ['500', '700', '800'],
})

const colors: Record<string, Record<string, string>> = {
    primary: {
        light_red: 'hsl(0, 100%, 67%)',
        light_red_t: 'hsla(0, 100%, 67%, .05)',
        orangey_yellow: 'hsl(39, 100%, 56%)',
        orangey_yellow_t: 'hsla(39, 100%, 56%, .05)', 
        green_teal: 'hsl(166, 100%, 37%)',
        green_teal_t: 'hsla(166, 100%, 37%, .05)',
        cobalt_blue: 'hsl(234, 85%, 45%)',
        cobalt_blue_t: 'hsla(234, 85%, 45%, .05)'
    },
    gradients: {
        // background: {
        //     light_slate_blue: 'hsl(252, 100%, 67%)',
        //     light_royal_blue: 'hsl(241, 81%, 54%)',
        // },
        background: 'linear-gradient(180deg, rgba(119,85,255,1) 0%, rgba(47,44,233,1) 100%)',
        // circle: {
        //     violet_blue: 'hsla(256, 72%, 46%, 1)',
        //     // persian blue is set to opacity 0
        //     persian_blue: 'hsla(241, 72%, 46%, 0)'
        // }
        circle: 'linear-gradient(180deg, hsla(256, 72%, 46%, 1)  0%, hsla(241, 72%, 46%, 0) 100%)'
    },
    neutral: {
        white: '#ffffff',
        pale_blue: '#ebf1ff',
        light_lavender: '#c8c7ff',
        dark_gray_blue: '#303b5a',
        dark_gray_blue_t: 'hsla(224, 30%, 27%, .5)',
    }
}

function ResultSection(): JSX.Element{
    return(
        <>
        <style jsx>{`
        section{
            background: ${colors.gradients.background};
            color: white;
        }
        
        div{
            background: ${colors.gradients.circle};
        }

        h1, span:nth-child(3), p{
            color: ${colors.neutral.light_lavender};
        }
      `}</style>
        <section className="flex flex-col justify-center items-center text-center w-[23rem] max-md:w-[375px] md:max-h-[32rem] max-md:h-[] px-[54px] max-md:px-[58px] pb-[46px] max-md:pb-[42px] pt-[38px] max-md:pt-6 md:rounded-[2rem] rounded-b-[2rem]">
            <h1 className="text-2xl max-md:text-lg max-md:leading-6 font-bold mb-[35px] max-md:mb-6">Your Result</h1>
            <div className="flex flex-col justify-center items-center w-[12.5rem] h-[12.5rem] max-md:w-[140px] max-md:h-[140px] rounded-full mb-7 max-md:mb-6">
                <h2>
                    <span className="text-7xl max-md:text-[3.5rem]">76</span><br></br>
                    <span className="text-lg max-md:text-base">of 100</span>
                </h2>
            </div>
            <h2 className=" text-[2rem] max-md:text-2xl mb-[14px] max-md:mb-2">Great</h2>
            <p className="w-64 font-medium text-lg max-md:text-base leading-6 max-md:leading-5">You scored higher than 65% of the people who have taken these tests.</p>
        </section>
        </>
    )
}
interface SkillSectionProps {
    color?: string;
    bg_color?:string;
    skill_name: string;
    score: string;
    icon: any;
    alt: string;
}

function Skill({color, bg_color, skill_name, score, icon, alt}: SkillSectionProps) {
    return(
        <>
        <style jsx>{`
        .skill-section{
            color: ${color};
            background-color: ${bg_color};
        }
        span:nth-child(1){
            color: ${colors.neutral.dark_gray_blue};
        }
        span:nth-child(2){
            color: ${colors.neutral.dark_gray_blue_t};
        }
      `}</style>
        <div className="skill-section flex justify-between items-center p-4 w-full h-14 rounded-xl bg-opacity-5">
            <div className="flex items-center w-[6.25rem]">
                <Image className=" mr-3" src={icon} alt={alt} width={50} height={50}/>
                <h3 className="font-bold w-16 mr-20">{skill_name}</h3>
            </div>
            <h3><span className="font-extrabold">{score}</span><span className="font-bold"> / 100</span></h3>
        </div>
        </>
    )
}

function SkillSection(){
    return(
        <div className="flex flex-col gap-y-4 mb-10 max-md:mb-6 w-72 max-md:w-[315px]">
            <Skill color={`${colors.primary.light_red}`} bg_color={`${colors.primary.light_red_t}`} skill_name="Reaction" score="80" icon={IconReaction} alt="Reaction skill score"></Skill>
            <Skill color={`${colors.primary.orangey_yellow}`} bg_color={`${colors.primary.orangey_yellow_t}`} skill_name="Memory" score="92" icon={IconMemory} alt="hello there"></Skill>
            <Skill color={`${colors.primary.green_teal}`} bg_color={`${colors.primary.green_teal_t}`} skill_name="Verbal" score="61" icon={IconVerbal} alt="hello there"></Skill>
            <Skill color={`${colors.primary.cobalt_blue}`} bg_color={`${colors.primary.cobalt_blue_t}`} skill_name="Visual" score="72" icon={IconVisual} alt="hello there"></Skill>    
        </div>
    )
}

function SummarySection(): JSX.Element{
    return(
        <>
        <style jsx>{`
        h1{
            color: ${colors.neutral.dark_gray_blue};
        }
        button{
            background: ${colors.neutral.dark_gray_blue};
        }
        button:hover{
            background: ${colors.gradients.background};
        }
      `}</style>
        <section className="pt-[38px] max-md:pt-6 px-10 max-md:px-[30px] max-md:pb-[30px]">
            <h1 className="mb-8 max-md:mb-6 text-2xl max-md:text-lg font-extrabold">Summary</h1>
            <SkillSection/>
            <button className="text-[white] text-lg w-full h-14 rounded-full">Continue</button>
        </section>
        </>
    )
}

export default function ResultsSummaryPage(): JSX.Element{
    return(
        <div style={{background: `${colors.neutral.pale_blue}`}} className="h-[100vh] max-md:h-full flex items-center justify-center">
            <div className={`${hanken_grotesk.className} flex max-md:flex-col bg-[white] rounded-[2rem]`}>
                <ResultSection/>
                <SummarySection/>
            </div>
        </div>
    )
}