import React from 'react';

type TermsPropsType = {
  close: () => void;
};
const Terms: React.FC<TermsPropsType> = ({close}) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-xl font-bold mb-4">Terms & Privacy</h1>
        <div>
          <article>
            <p className="underline font-bold">
              Authoring tool data protection notice
            </p>
            <p className="italic">A: Logging in</p>
            <ul className="list-disc list-inside">
              <li>
                You can log in with your Google or Facebook account. Google or
                Facebook may store some of your data, including personal data and
                data about your use of this app. See Google’s full privacy policy{' '}
                <a
                  href="https://policies.google.com/"
                  className="text-blue-500 underline"
                >
                  here
                </a>
                , and Facebook’s policy{' '}
                <a
                  href="https://www.facebook.com/about/privacy/"
                  className="text-blue-500 underline"
                >
                  here
                </a>
                . University College Cork and University of Lancaster are not
                responsible for data collection by these third parties.
              </li>
            </ul>
            <p className="italic">B: Submitting experiences</p>
            <ul className="list-disc list-inside">
              <li>
                By creating an ‘experience’, you are submitting your material for
                use on the Ports, Past and Present app. The app serves to educate
                and inform tourists and communities on the cultural heritage of
                ports in Ireland and Wales.
              </li>
              <li>
                Your material could be used in project publicity and research as
                well as on the app. It may also be re-used by third parties under
                the{' '}
                <a
                  href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                  className="text-blue-500 underline"
                >
                  Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
                  International
                </a>{' '}
                (CC BY-NC-ND 4.0) License. If you wish to opt for a more open
                license, please contact us.
              </li>
              <li>
                If your story contains personal information about yourself or
                others, please ensure you have full permission to publish it here.
                Please ensure that others referenced are aware that the story may
                be reused by third parties.
              </li>
              <li>
                After submission, you retain the right to access, amend or
                withdraw your experience material. Should you wish to do so,
                please email us. Please note that we will be unable to withdraw
                your material from published project research or publicity, or
                from third-party uses.
              </li>
              <li>
                If you have any other questions or concerns about your experience,
                our app, or the project, please email us.
              </li>
            </ul>
            <p>
              University College Cork (UCC) is the designated project data
              controller. Aoife Dowling is the nominated contact; email her at{' '}
              <a
                href="mailto:aoife.dowling@ucc.ie"
                className="text-blue-500 underline"
              >
                aoife.dowling@ucc.ie
              </a>
              . Lancaster University is the designated project data processor, and
              the authoring tool is hosted in the UK on a university server.
              Deborah Sutton is the nominated contact; email her at{' '}
              <a
                href="mailto:d.sutton@lancaster.ac.uk"
                className="text-blue-500 underline"
              >
                d.sutton@lancaster.ac.uk
              </a>
              .
            </p>
          </article>
        </div>
        <div className="mt-4 text-right">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={close}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
