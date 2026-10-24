#include <fstream>

using namespace std;
ifstream f("grupapregatitoare.in");
ofstream g("grupapregatitoare.out");
long n,p,suma,flag,minim,secpar,secimp,lp,li,i,x,y,nr1,nr2,maxim,lungi,lungp ;

int main()
{
    f >> n >> p ;
    suma = 0 ; //suma maximelor din perechi
    flag = 0 ; //semnaleaza daca numarul maxim dintr-o pereche e divizibil cu p
    minim = 20000 ;
    secpar = 0 ; //lungimea unei secvente pare
    secimp = 0 ; //lungimea unei secvente impare
    lp = 0 ;
    li = 0 ;
    for( i=1 ; i<=n ; i++ )
    {
        f >> x >> y ;
        //punctul a)
        if ( x>y ) suma=suma+x ;
              else suma=suma+y ;
        if ((( x%p==0 ) && ( x>=y)) or (( y%p==0 ) && ( y>=x ))) flag=1 ;
        if (( x%p==0 ) && ( x<y ) && ( y-x<minim ))
          {
              minim=y-x ;
              nr1=x ;
              nr2=y ;
          }
        if (( y%p==0 ) && ( y<x ) && ( x-y<minim ))
          {
              minim=x-y ;
              nr1=y ;
              nr2=x ;
          }
        // punctul b)
        if (( x%2==0 ) or ( y%2==0 ))secpar++ ;
                              else {
                                     if ( lp==0 ) { lungp=secpar ; lp=1 ; }
                                     if ( secpar>maxim ) maxim=secpar ;
                                     secpar=0 ;
                                   }
        if (( x%2==1 ) or ( y%2==1 ))secimp++ ;
                              else {
                                     if ( li==0 ) { lungi=secimp ; li=1 ; }
                                     if ( secimp>maxim ) maxim=secimp ;
                                     secimp=0 ;
                                   }
    }
    if ( secpar+lungp>maxim ) maxim=secpar+lungp ;
    if ( secimp+lungi>maxim ) maxim=secimp+lungi ;

    if ( flag==1 ) g << suma ;
              else g << suma-nr2+nr1 ;
    g << "\n" ;
    g << maxim ;
    return 0;
}