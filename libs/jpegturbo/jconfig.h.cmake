/* Version ID for the JPEG library.
 * Might be useful for tests like "#if JPEG_LIB_VERSION >= 60".
 */
#define JPEG_LIB_VERSION  80

/* libjpeg-turbo version */
#define LIBJPEG_TURBO_VERSION 0

/* libjpeg-turbo version in integer form */
#define LIBJPEG_TURBO_VERSION_NUMBER 0

/* Support arithmetic encoding */
#define C_ARITH_CODING_SUPPORTED

/* Support arithmetic decoding */
#define D_ARITH_CODING_SUPPORTED

/*
 * Define BITS_IN_JSAMPLE as either
 *   8   for 8-bit sample values (the usual setting)
 *   12  for 12-bit sample values
 * Only 8 and 12 are legal data precisions for lossy JPEG according to the
 * JPEG standard, and the IJG code does not support anything else!
 * We do not support run-time selection of data precision, sorry.
 */

#define BITS_IN_JSAMPLE  8      /* use 8 or 12 */

/* Define to 1 if you have the <locale.h> header file. */
#undef HAVE_LOCALE_H

/* Define to 1 if you have the <stddef.h> header file. */
#cmakedefine HAVE_STDDEF_H

/* Define to 1 if you have the <stdlib.h> header file. */
#cmakedefine HAVE_STDLIB_H

/* Define to 1 if the system has the type `unsigned char'. */
#define HAVE_UNSIGNED_CHAR

/* Define to 1 if the system has the type `unsigned short'. */
#define HAVE_UNSIGNED_SHORT

/* Compiler does not support pointers to undefined structures. */
#undef INCOMPLETE_TYPES_BROKEN

/* Support in-memory source/destination managers */
#define MEM_SRCDST_SUPPORTED

/* Define if you have BSD-like bzero and bcopy in <strings.h> rather than
   memset/memcpy in <string.h>. */
#undef NEED_BSD_STRINGS

/* Define if you need to include <sys/types.h> to get size_t. */
#undef NEED_SYS_TYPES_H

/* Define if your (broken) compiler shifts signed values as if they were
   unsigned. */
#undef RIGHT_SHIFT_IS_UNSIGNED

/* Use accelerated SIMD routines. */
#define WITH_SIMD

/* Define to 1 if type `char' is unsigned and you are not using gcc.  */
#ifndef __CHAR_UNSIGNED__
# undef __CHAR_UNSIGNED__
#endif

/* Define to empty if `const' does not conform to ANSI C. */
#undef const

/* Define to `unsigned int' if <sys/types.h> does not define. */
#undef size_t
