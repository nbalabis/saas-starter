import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronsUpDown, KeyRound, Puzzle } from "lucide-react";

import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const codeClasses =
  "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold";

const tools = [
  {
    label: "Clerk Auth",
    icon: KeyRound,
    color: "text-[#5824FE]",
    bgColor: "bg-[#5824FE]/10",
    content: (
      <div>
        <ul className="text-md ml-6 list-disc [&>li]:mt-2">
          <li>
            Log in to your Clerk{" "}
            <a
              href="https://dashboard.clerk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#5824FE]"
            >
              dashboard
            </a>{" "}
            and follow the instructions to add a new application with the
            authentication methods of your choosing
          </li>
          <li>
            Once your application has been created, paste your <br />
            <div className="text-center">
              <code className={codeClasses}>
                NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
              </code>
              <br />
              &
              <br />
              <code className={codeClasses}>CLERK_SECRET_KEY</code>
              <br />
            </div>
            into your <code className={codeClasses}>.env</code> file
          </li>
          <li className="text-destructive">
            Make sure that <code className={codeClasses}>.env</code> is added to
            your <code className={codeClasses}>.gitignore</code> file before you
            commit
          </li>
          <li>
            Add the following to your <code className={codeClasses}>.env</code>{" "}
            file and change the urls to fit your needs to complete the Clerk
            setup: <br />
            <code className={codeClasses}>
              NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
              NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
              NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
              NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
            </code>{" "}
            <br />
          </li>
          <li>
            🎉 Congratulations! Your Saas now has complete Clerk authentication
            and authorization
          </li>
        </ul>
      </div>
    ),
  },
  {
    label: "Shadcn/ui Components",
    icon: Puzzle,
    color: "text-[#0A0A0B]",
    bgColor: "bg-[#0A0A0B]/10",
    content: <div>This is the other content</div>,
  },
];

const LandingPage = () => {
  return (
    <div>
      <div>
        <Link href="sign-in">
          <Button>Log In</Button>
        </Link>
        <Link href="sign-up">
          <Button>Sign Up</Button>
        </Link>
      </div>
      <div className="mb-8 space-y-4">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          SaaS Starter
        </h2>
        <p className="text-center text-sm font-light text-muted-foreground md:text-lg">
          An opinionated Next.js starter for SaaS applications
        </p>
      </div>
      <div className="space-y-4 px-4 md:px-20 lg:px-32">
        {tools.map((tool, index) => (
          <Collapsible>
            <Card
              key={index}
              className="flex flex-col gap-4 border-primary/5 p-4 transition hover:shadow-md"
            >
              <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={cn("w-fit rounded-md p-2", tool.bgColor)}>
                    <tool.icon className={cn("h-8 w-8", tool.color)} />
                  </div>
                  <div className="font-semibold">{tool.label}</div>
                </div>
                <ChevronsUpDown className="h-5 w-5" />
              </CollapsibleTrigger>
              <CollapsibleContent>{tool.content}</CollapsibleContent>
            </Card>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
