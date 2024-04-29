'use client'

import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useTheme } from 'next-themes';

export default function EditorPain() {
    const {theme}=useTheme()


  return (
    <Editor
      apiKey='s6hca8dikwmog7ba2xepao0c1irtcudm2pk745vxfriakp1u'
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate  tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        height: '100vh',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        content_style: `
        body {
            background: ${theme=="dark"?"#000000":"#78282"};
        }

        @media (min-width: 840px) {
            html {
                background: ${theme=="dark"?"#121212":"#d1d5db"};
                min-height: 100%;
                padding: 0 .5rem
            }

            body {
                background-color:#fff;
                box-shadow: 0 0 4px rgba(0, 0, 0, .15);
                box-sizing: border-box;
                margin: 1rem auto 0;
                max-width: 1000px;
                min-height: calc(100vh - 1rem);
                padding:4rem 6rem 6rem 6rem
            }
        }
    `,
        
      }}
      initialValue="Get Started With Your Devlib Blog"
    />
  );
}