import React from 'react'

const MarkerComp = () => {
    return (
              // <div
              //   style={{
              //     zIndex: 999,
              //     position: 'absolute',
              //     height: '100%',
              //     width: '100%',
              //     padding: 0,
              //     borderWidth: 0,
              //     margin: 0,
              //     left: 0,
              //     top: 0,
              //     touchAction: 'pan-x pan-y',
              //     backgroundColor: 'black'
              //   }}
              //   className='rounded bg-gray-300 markerDots'
              // >
              //   <div
              //     style={{
              //       zIndex: 4,
              //       position: 'absolute',
              //       left: '50%',
              //       top: '50%',
              //       width: '100%',
              //       willChange: 'transform',
              //       transform: 'translate(0px, 0px)',
                    
              //     }}
              //   >
              //     <div
              //       style={{
              //         position: 'absolute',
              //         left: 0,
              //         top: 0,
              //         zIndex: 104,
              //         width: '100%',
              //       }}
              //     ></div>
              //     <div
              //       style={{
              //         position: 'absolute',
              //         left: 0,
              //         top: 0,
              //         zIndex: 105,
              //         width: '100%',
              //       }}
              //     ></div>
              //     <div
              //       style={{
              //         position: 'absolute',
              //         left: 0,
              //         top: 0,
              //         zIndex: 106,
              //         width: '100%',
              //       }}
              //     >
              //       <span
              //         id="1979BE59-6262-4980-A575-87E388FD4E93"
              //         style={{ display: 'none' }}
              //       >
              //         To navigate, press the arrow keys.
              //       </span>
              //       <div style={{ position: 'absolute', left: 0, top: 0, zIndex: 4 }}>
              //         <div
              //           style={{
              //             display: 'block',
              //             width: 11,
              //             height: 11,
              //             cursor: 'pointer',
              //             touchAction: 'none',
              //             position: 'absolute',
              //             left: -130,
              //             top: 34,
              //           }}
              //         >
              //           <div
              //             style={{
              //               position: 'absolute',
              //               left: 0,
              //               top: 0,
              //               width: 9,
              //               height: 9,
              //               borderWidth: 1,
              //               borderStyle: 'solid',
              //               borderRadius: 6,
              //               backgroundColor: 'white',
              //               borderColor: 'rgb(0, 0, 0)',
              //             }}
              //           ></div>
              //         </div>
              //         <div
              //           style={{
              //             display: 'block',
              //             width: 11,
              //             height: 11,
              //             cursor: 'row-resize',
              //             touchAction: 'none',
              //             position: 'absolute',
              //             left: -130,
              //             top: -166,
              //           }}
              //         >
              //           <div
              //             style={{
              //               position: 'absolute',
              //               left: 0,
              //               top: 0,
              //               width: 9,
              //               height: 9,
              //               borderWidth: 1,
              //               borderStyle: 'solid',
              //               borderRadius: 6,
              //               backgroundColor: 'white',
              //               borderColor: 'rgb(0, 0, 0)',
              //             }}
              //           ></div>
              //         </div>
              //         <div
              //           style={{
              //             display: 'block',
              //             width: 11,
              //             height: 11,
              //             cursor: 'row-resize',
              //             touchAction: 'none',
              //             position: 'absolute',
              //             left: -130,
              //             top: 234,
              //           }}
              //         >
              //           <div
              //             style={{
              //               position: 'absolute',
              //               left: 0,
              //               top: 0,
              //               width: 9,
              //               height: 9,
              //               borderWidth: 1,
              //               borderStyle: 'solid',
              //               borderRadius: 6,
              //               backgroundColor: 'white',
              //               borderColor: 'rgb(0, 0, 0)',
              //             }}
              //           ></div>
              //         </div>
              //         <div
              //           style={{
              //             display: 'block',
              //             width: 11,
              //             height: 11,
              //             cursor: 'col-resize',
              //             touchAction: 'none',
              //             position: 'absolute',
              //             left: 70,
              //             top: 34,
              //           }}
              //         >
              //           <div
              //             style={{
              //               position: 'absolute',
              //               left: 0,
              //               top: 0,
              //               width: 9,
              //               height: 9,
              //               borderWidth: 1,
              //               borderStyle: 'solid',
              //               borderRadius: 6,
              //               backgroundColor: 'white',
              //               borderColor: 'rgb(0, 0, 0)',
              //             }}
              //           ></div>
              //         </div>
              //         <div
              //           style={{
              //             display: 'block',
              //             width: 11,
              //             height: 11,
              //             cursor: 'col-resize',
              //             touchAction: 'none',
              //             position: 'absolute',
              //             left: -330,
              //             top: 34,
              //           }}
              //         >
              //           <div
              //             style={{
              //               position: 'absolute',
              //               left: 0,
              //               top: 0,
              //               width: 9,
              //               height: 9,
              //               borderWidth: 1,
              //               borderStyle: 'solid',
              //               borderRadius: 6,
              //               backgroundColor: 'white',
              //               borderColor: 'rgb(0, 0, 0)',
              //             }}
              //           ></div>
              //         </div>
              //       </div>
              //       <div
              //         style={{
              //           width: 26,
              //           height: 37,
              //           overflow: 'hidden',
              //           position: 'absolute',
              //           touchAction: 'none',
              //           left: -138,
              //           top: 2,
              //           zIndex: 5,
              //         }}
              //         role="button"
              //         tabIndex="0"
              //         aria-describedby="1979BE59-6262-4980-A575-87E388FD4E93"
              //       >
              //         <img
              //           alt=""
              //           src="https://maps.gstatic.com/mapfiles/transparent.png"
              //           draggable="false"
              //           useMap="#gmimap5"
              //           style={{
              //             width: 26,
              //             height: 37,
              //             userSelect: 'none',
              //             border: 0,
              //             padding: 0,
              //             margin: 0,
              //             maxWidth: 'none',
              //           }}
              //         />
              //         <map name="gmimap5" id="gmimap5">
              //           <area
              //             log="miw"
              //             coords="13,0,4,3.5,0,12,2.75,21,13,37,23.5,21,26,12,22,3.5"
              //             shape="poly"
              //             tabIndex="-1"
              //             title=""
              //             style={{
              //               display: 'inline',
              //               position: 'absolute',
              //               left: 0,
              //               top: 0,
              //               cursor: 'pointer',
              //               touchAction: 'none',
              //             }}
              //           />
              //         </map>
              //       </div>
              //     </div>
              //     <div
              //       style={{
              //         position: 'absolute',
              //         left: 0,
              //         top: 0,
              //         zIndex: 107,
              //         width: '100%',
              //       }}
              //     >
              //       <button
              //         type="button"
              //         title="Undo last edit"
              //         aria-label="Undo last edit"
              //         style={{
              //           background: 'transparent',
              //           border: 'none',
              //           margin: 0,
              //           padding: 0,
              //           zIndex: -202,
              //           cursor: 'pointer',
              //           display: 'none',
              //           touchAction: 'none',
              //         }}
              //       >
              //         <span style={{ display: 'inline-block' }}>
              //           <div
              //             style={{
              //               width: 30,
              //               height: 27,
              //               overflow: 'hidden',
              //               position: 'relative',
              //             }}
              //           >
              //             <img
              //               alt=""
              //               src="https://maps.gstatic.com/mapfiles/undo_poly.png"
              //               draggable="false"
              //               style={{
              //                 position: 'absolute',
              //                 left: 0,
              //                 top: 0,
              //                 userSelect: 'none',
              //                 border: 0,
              //                 padding: 0,
              //                 margin: 0,
              //                 maxWidth: 'none',
              //                 width: 90,
              //                 height: 27,
              //               }}
              //             />
              //           </div>
              //         </span>
              //       </button>
              //     </div>
              //   </div>
              // </div>
              <div className='relative rounded-full w-40 h-40 border-black border-4'>
              <div className='flex justify-center items-center w-full h-full z-10'>
                <span>clak</span>
              <div className='rounded-full w-full h-full bg-gray-400 opacity-50'></div>
              </div>
            </div>
            );
          };

export default MarkerComp