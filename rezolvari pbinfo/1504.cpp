#include <fstream>
using namespace std;
FILE *f=fopen("comori1.in","r");
FILE *g=fopen("comori1.out","w");
int main()
{
    int n,x;
    fscanf(f,"%d",&n);
    fscanf(f,"%d",&x);
    int xant=x,nr=0;
    for(int i=2;i<=n;i++)
    {
        fscanf(f,"%d",&x);
        if(x<xant)
        {
            nr++;
            fprintf(g,"%d ",i);
        }
        xant=x;
    }
    if(nr==0)
        fprintf(g,"%d",0);
    return 0;
}